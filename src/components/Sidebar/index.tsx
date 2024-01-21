import { MethodsRequest } from "@/enums";
import { Eye, NotebookPen, Pencil } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

const endpoints = [
  {
    id: 1,
    label: "signIn",
    methodRequest: MethodsRequest.POST,
  },
  {
    id: 2,
    label: "signUp",
    methodRequest: MethodsRequest.POST,
  },
  {
    id: 3,
    label: "recoverPassword",
    methodRequest: MethodsRequest.PUT,
  },
  {
    id: 4,
    label: "MFA",
    methodRequest: MethodsRequest.POST,
  },
  {
    id: 5,
    label: "getDeal",
    methodRequest: MethodsRequest.GET,
  },
  {
    id: 6,
    label: "getDebts",
    methodRequest: MethodsRequest.GET,
  },
  {
    id: 7,
    label: "getCustomer",
    methodRequest: MethodsRequest.GET,
  },
  {
    id: 8,
    label: "removeCustomer",
    methodRequest: MethodsRequest.DELETE,
  },
  {
    id: 9,
    label: "paymentMethod",
    methodRequest: MethodsRequest.PATCH,
  },
  {
    id: 10,
    label: "setContact",
    methodRequest: MethodsRequest.POST,
  },
  {
    id: 11,
    label: "getDealWithDetails",
    methodRequest: MethodsRequest.GET,
  },
  {
    id: 12,
    label: "setDeal",
    methodRequest: MethodsRequest.POST,
  },
];

export const Sidebar: React.FC = () => {
  const handleColorEndpoint = (methodRequest: MethodsRequest) => {
    switch (methodRequest) {
      case MethodsRequest.GET:
        return "text-green-300 group-hover:text-green-500";
      case MethodsRequest.POST:
        return "text-yellow-200 group-hover:text-yellow-500";
      case MethodsRequest.PUT:
        return "text-blue-400 group-hover:text-blue-500";
      case MethodsRequest.PATCH:
        return "text-violet-300 group-hover:text-violet-500";
      case MethodsRequest.DELETE:
        return "text-red-300 group-hover:text-red-500";
      default:
        break;
    }
  };

  return (
    <div className="pb-12 text-white">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">
            Ações
          </h2>
          <div className="space-y-1">
            <Button className="w-full justify-start">
              <NotebookPen className="mr-2 h-4 w-4" />
              Criar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Pencil className="mr-2 h-4 w-4" />
              Editar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Eye className="mr-2 h-4 w-4" />
              Visualizar
            </Button>
          </div>
        </div>
        {/* <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">
            Menu Title
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Smile className="mr-2 h-4 w-4" />
              Item
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Smile className="mr-2 h-4 w-4" />
              Item
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Smile className="mr-2 h-4 w-4" />
              Item
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Smile className="mr-2 h-4 w-4" />
              Item
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Smile className="mr-2 h-4 w-4" />
              Item
            </Button>
          </div>
        </div> */}
        <div className="py-2">
          <h2 className=" px-7 text-lg font-semibold">
            Ednpoints Recentes
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {endpoints?.map((endpoint) => (
                <Button
                  key={endpoint.id}
                  variant="ghost"
                  className="w-full justify-start font-normal grid grid-cols-12 text-start col-span-9 gap-5 group"
                >
                  <span className={`${handleColorEndpoint(endpoint.methodRequest)} font-semibold col-span-3`}>
                    {endpoint.methodRequest}
                  </span>
                  <span>
                    {endpoint.label}
                  </span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
