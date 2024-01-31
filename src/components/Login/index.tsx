import { User } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import LoginDialogContent from "./login-dialog-content";

export default function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <User className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
      </DialogTrigger>
      <LoginDialogContent />
    </Dialog>
  );
}
