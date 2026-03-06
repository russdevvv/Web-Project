import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { SharedModalProps } from "@/types/type";

const SharedModal = ({
  open,
  onOpenChange,
  title,
  children,
  confirmText = "",
  cancelText = "",
  onConfirm,
  onCancel,
}: SharedModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Dynamic Content */}
        <div>{children}</div>

        {/* Footer Buttons */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={onCancel}>
              {cancelText}
            </Button>
          </DialogClose>

          <Button onClick={onConfirm}>{confirmText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SharedModal;
