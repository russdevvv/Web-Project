export interface SharedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface Column {
  header: string;
  accessor: string;
  align?: "left" | "right";
}

export interface SharedTableProps {
  columns: Column[];
  data: any[];
  renderActions?: (row: any) => React.ReactNode;
  itemsPerPage?: number;
}
