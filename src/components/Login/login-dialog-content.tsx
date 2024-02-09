import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { DialogClose } from "../ui/dialog.tsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
} from "../ui/dialog.tsx";
import { useForm } from "react-hook-form";
import * as authService from "../../services/auth-service.ts";
import { useContext, useEffect } from "react";
import { ContextToken } from "@/contexts/context-token.ts";
import { ContextDialogLogin } from "./login-dialog-context.ts";

const userLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Campo Obrigatório")
    .email("Email precisa ser válido"),
  senha: z
    .string()
    .min(1, "Campo Obrigatório")
    .min(6, "Senha deve conter no mínimo 6 caracteres"),
});

type UserLoginSchema = z.infer<typeof userLoginSchema>;

export default function LoginDialogContent() {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
  });

  const { setContextToken } = useContext(ContextToken);
  const { isOpen, setIsOpen } = useContext(ContextDialogLogin);

  useEffect(() => {
    if (!isOpen) {
      clearErrors();
      reset();
    }
  }, [isOpen]);

  function closeDialog() {
    setIsOpen(false);
  }

  function saveAccessToken(accessToken: string) {
    authService.saveAccessTokenInLocalStorage(accessToken);
    setContextToken(authService.getAccessTokenPayload());
  }

  function handleUserLogin(data: UserLoginSchema) {
    authService
      .loginRequest({ username: data.email, password: data.senha })
      .then((response) => {
        saveAccessToken(response.data.access_token);
        console.log(response);
        closeDialog();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <DialogContent className="font-['Assistant'] sm:max-w-[425px]">
      <DialogHeader>
        <div className="mb-4">
          <DialogTitle className="text-center text-2xl font-bold">
            Login
          </DialogTitle>
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <div className="mb-5 grid grid-cols-6 items-center">
          <Label htmlFor="email">E-mail</Label>
          <Input
            className={`col-span-5 ${errors.email?.message ? "border-red-600 focus-visible:ring-red-600" : "border-zinc-400"} mb-[0.1250rem]`}
            type="email"
            id="email"
            {...register("email")}
          ></Input>
          {errors.email && (
            <div className="col-span-5 col-start-2 text-sm text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-5 grid grid-cols-6 items-center">
          <Label htmlFor="senha">Senha</Label>
          <Input
            className={`col-span-5 ${errors.senha?.message ? "border-red-600 focus-visible:ring-red-600" : "border-zinc-400"} mb-[0.1250rem]`}
            type="password"
            id="senha"
            {...register("senha")}
          ></Input>
          {errors.senha && (
            <div className="col-span-5 col-start-2 text-sm text-red-600">
              {errors.senha.message}
            </div>
          )}
        </div>
        {errors.root && <div>{errors.root.message}</div>}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Entrar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
