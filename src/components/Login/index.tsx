import { User } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import LoginDialogContent from "./login-dialog-content";
import { useState } from "react";
import { ContextDialogLogin } from "./login-dialog-context";

export default function Login() {
  const [isOpen, setIsOpen] = useState<boolean | undefined>();

  return (
    <ContextDialogLogin.Provider value={{ isOpen, setIsOpen }}>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <User className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
        </DialogTrigger>
        <LoginDialogContent />
      </Dialog>
    </ContextDialogLogin.Provider>
  );
}
