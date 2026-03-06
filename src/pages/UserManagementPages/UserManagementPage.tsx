import SharedModal from "@/components/Shared/SharedModal";
import SharedTable from "@/components/Shared/SharedTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoreHorizontalIcon } from "lucide-react";
import { useState } from "react";

const UserManagementPage = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const columns = [
    { header: "Full Name", accessor: "name" },
    { header: "Price", accessor: "price" },
  ];

  const data = [
    { name: "Wireless Mouse", price: "$29.99" },
    { name: "Mechanical Keyboard", price: "$129.99" },
    { name: "USB-C Hub", price: "$49.99" },
    { name: "Monitor", price: "$199.99" },
    { name: "Laptop Stand", price: "$39.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
    { name: "Webcam", price: "$89.99" },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2 p-4 lg:p-6">
        <div>
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Add User
          </Button>
        </div>

        <div>
          <SharedTable
            columns={columns}
            data={data}
            itemsPerPage={15}
            renderActions={(row) => (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          />
        </div>
      </div>

      <SharedModal
        title="Create User"
        open={isOpenModal}
        onOpenChange={() => setOpenModal(false)}
        onConfirm={() => setOpenModal(true)}
        onCancel={() => setOpenModal(false)}
        confirmText="Confirm"
        cancelText="Cancel"
        children={
          <form>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </Field>
            </FieldGroup>
          </form>
        }
      />
    </div>
  );
};

export default UserManagementPage;
