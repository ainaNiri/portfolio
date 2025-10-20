import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type SuccessDialogProps = {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export function SuccessDialog({
  open,
  title,
  content,
  onClose
}: SuccessDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-blue-900/90 border-4 border-white/10 shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="hover:cursor-pointer" onClick={onClose}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}