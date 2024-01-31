import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { useForm } from "react-hook-form";

const userLoginSchema = z.object({
  email: z
    .string()
    .regex(RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")),
  senha: z.string().min(6),
});

type UserLoginSchema = z.infer<typeof userLoginSchema>;

export default function LoginDialogContent() {
  const { register, handleSubmit } = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
  });

  function handleUserLogin(data: UserLoginSchema) {
    console.log(data);
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
      <form onSubmit={handleSubmit(handleUserLogin)} className="space-y-6">
        <div className="grid grid-cols-6 items-center gap-5 text-right">
          <Label htmlFor="email">E-mail</Label>
          <Input
            className="col-span-5 border-zinc-400"
            id="email"
            {...register("email")}
          ></Input>
        </div>
        <div className="grid grid-cols-6 items-center gap-5 text-right">
          <Label htmlFor="senha">Senha</Label>
          <Input
            className="col-span-5 border-zinc-400"
            type="password"
            id="senha"
            {...register("senha")}
          ></Input>
        </div>
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
