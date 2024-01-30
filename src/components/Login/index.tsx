import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <User className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
      </DialogTrigger>
      <DialogContent className="font-['Assistant'] sm:max-w-[425px]">
        <DialogHeader>
          <div className="mb-4">
            <DialogTitle className="text-center text-2xl font-bold">
              Login
            </DialogTitle>
          </div>
        </DialogHeader>
        <form className="space-y-6">
          <div className="grid grid-cols-6 items-center gap-5 text-right">
            <Label htmlFor="email">E-mail</Label>
            <Input className="col-span-5 border-zinc-400" id="email"></Input>
          </div>
          <div className="grid grid-cols-6 items-center gap-5 text-right">
            <Label htmlFor="senha">Senha</Label>
            <Input
              className="col-span-5 border-zinc-400"
              type="password"
              id="senha"
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
    </Dialog>
  );
}
