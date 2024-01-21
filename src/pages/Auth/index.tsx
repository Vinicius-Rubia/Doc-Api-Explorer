import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <main className="h-screen px-3 md:p-10 flex items-center mx-auto max-w-7xl">
      <section className="md:border grid md:grid-cols-2 border-zinc-800 rounded-md h-[90%] w-full">
        <div className="hidden md:flex flex-col bg-zinc-900 p-8">
          <h2 className="font-semibold text-lg text-slate-200">
            <Container />
            Doc Api Explorer
          </h2>

          <p className="text-sm text-slate-300 flex flex-1 items-end">
            "Desvende os caminhos da conectividade enquanto exploramos juntos o
            vasto ecossistema de APIs. Bem-vindo ao portal que desvela os
            segredos da comunicação digital!"
          </p>
        </div>
        <div className="flex flex-col justify-center h-full m-auto px-5">
          <h1 className="text-center font-semibold text-slate-200 text-xl md:text-2xl">
            Bem vindo de volta :)
          </h1>

          <p className="mt-2 mb-7 text-sm md:text-base text-zinc-400 text-center">
            Preencha os campos para entrar em sua conta.
          </p>

          <form className="space-y-5">
            <div className="grid space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="nome@exemplo.com" />
            </div>

            <div className="grid space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="****************"
              />
            </div>

            <Button className="flex mx-auto w-full" onClick={() => navigate("/home")}>
              {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
              Entrar
            </Button>
          </form>

          <p className="text-center text-sm text-zinc-500 mt-5">
            &copy; Todos os direitos reservados pela <br />
            <strong>Doc Api Explorer</strong>.
          </p>
        </div>
      </section>
    </main>
  );
};
