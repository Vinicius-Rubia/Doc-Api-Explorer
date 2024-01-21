import { Menu } from "lucide-react";
import React from "react";
import { Sidebar } from "..";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const MenuBar: React.FC = () => {
  return (
    <ScrollArea>
      <Menubar className="pl-0">
        <MenubarMenu>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" className="h-8 w-8 rounded-s-none">
                  <Menu className="h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[250px]">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          <MenubarTrigger className="font-bold">Início</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Item</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Item... <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Item... <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Item... <MenubarShortcut>⇧⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarShortcut />
            <MenubarItem>
              Item <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="relative">Tutorial</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Item</MenubarSubTrigger>
              <MenubarSubContent className="w-[230px]">
                <MenubarItem>
                  Item <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Item <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Item... <MenubarShortcut>⌥⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Item</MenubarItem>
                <MenubarItem disabled>Item</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Item... <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Item <MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Item</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Item</MenubarItem>
                <MenubarItem>Item</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Item...</MenubarItem>
                <MenubarItem>Item...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Item...</MenubarItem>
                <MenubarItem disabled>Item...</MenubarItem>
                <MenubarItem>Item</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Item</MenubarItem>
                <MenubarItem disabled>Item</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Item... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Item...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Item <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
            </MenubarItem>
            <MenubarItem>Item</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Item...</MenubarItem>
            <MenubarItem disabled>
              Item... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Documentação</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              Item <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Item <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Item <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Item <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Item <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Item <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Item <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Item...{" "}
              <MenubarShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Item{" "}
              <MenubarShortcut>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Environments</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Item</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Item</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset disabled>
              Item
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Item</MenubarItem>
            <MenubarItem disabled inset>
              Item
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">Sobre</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarLabel inset>Title</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Item</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Item</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Item</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Item...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Item...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
