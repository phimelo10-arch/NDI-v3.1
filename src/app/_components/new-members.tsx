"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Users } from "lucide-react"
import { useEffect, useState } from "react";

const initialMembers = [
    { amount: "R$10,00", name: "Kaiq", age: "19", state: "SP", skills: "automação N8N", partnership: "Sim" },
    { amount: "R$10,00", name: "Nicholas", age: "24", state: "MG", skills: "design gráfico, web design", partnership: "Sim" },
    { amount: "R$10,00", name: "Djeimis", age: "24", state: "RS", skills: "Kawai, After Pay, Cash on Delivery", partnership: "Sim" },
    { amount: "R$10,00", name: "Glauber", age: "25", state: "SP", skills: "desenvolvedor web, vibe coder", partnership: "Sim" },
    { amount: "R$10,00", name: "Wagno", age: "46", state: "CE", skills: "iniciante", partnership: "Não sei" },
    { amount: "R$10,00", name: "Pedro", age: "26", state: "SP", skills: "Tráfego Pago", partnership: "Sim" },
    { amount: "R$10,00", name: "Léo", age: "?", state: "MG", skills: "Não informado", partnership: "Não sei" },
    { amount: "R$10,00", name: "Gabriel", age: "?", state: "MG", skills: "Google Ads e Copywriter", partnership: "Sim" },
    { amount: "R$10,00", name: "Gilmar", age: "18", state: "PB", skills: "Ex dono de agência", partnership: "Sim" },
    { amount: "R$10,00", name: "Arilson", age: "?", state: "SP", skills: "Não informado", partnership: "Não sei" },
    { amount: "R$10,00", name: "Julião", age: "31", state: "RJ", skills: "Avançado - Em busca dos 6 digítos de lucro", partnership: "Sim" },
    { amount: "R$10,00", name: "Matheus", age: "20", state: "RJ", skills: "Iniciante", partnership: "Não sei" },
];

export function NewMembers() {
  const [yesterday, setYesterday] = useState('');
  const [members, setMembers] = useState(initialMembers.map(m => ({ ...m, entryDate: '' })));

  useEffect(() => {
    const today = new Date();
    // Set to Brasília time zone (UTC-3)
    today.setUTCHours(today.getUTCHours() - 3);

    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    
    const yesterdayDate = new Date(today);
    yesterdayDate.setDate(today.getDate() - 1);
    setYesterday(formatDate(yesterdayDate));

    const dayBeforeYesterdayDate = new Date(today);
    dayBeforeYesterdayDate.setDate(today.getDate() - 2);
    const dayBeforeYesterday = formatDate(dayBeforeYesterdayDate);

    const threeDaysAgoDate = new Date(today);
    threeDaysAgoDate.setDate(today.getDate() - 3);
    const threeDaysAgo = formatDate(threeDaysAgoDate);

    setMembers(initialMembers.map((member, index) => {
      let entryDate;
      if (index < 5) {
        entryDate = formatDate(yesterdayDate);
      } else if (index < 9) {
        entryDate = dayBeforeYesterday;
      } else {
        entryDate = threeDaysAgo;
      }
      return { ...member, entryDate };
    }));

  }, []);

  return (
    <div className="w-full max-w-6xl mt-20 text-center">
      <div className="flex justify-center mb-4">
        <Users className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold mb-2 font-headline text-primary">membros recém chegados</h2>
      <p className="text-sm text-foreground mb-8">(atualizado a cada três dias)</p>
      <div className="overflow-x-auto rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-primary">data_entrada</TableHead>
              <TableHead className="text-center text-primary">valor_pago</TableHead>
              <TableHead className="text-center text-primary">nome</TableHead>
              <TableHead className="text-center text-primary">idade</TableHead>
              <TableHead className="text-center text-primary">estado</TableHead>
              <TableHead className="text-center text-primary">skills</TableHead>
              <TableHead className="text-center text-primary">aceita_sociedade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index} className="text-center">
                <TableCell>{member.entryDate}</TableCell>
                <TableCell className="font-bold text-accent bg-accent/10">{member.amount}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.age}</TableCell>
                <TableCell>{member.state}</TableCell>
                <TableCell>{member.skills}</TableCell>
                <TableCell>{member.partnership}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-lg font-semibold text-accent font-headline">Garanta sua vaga no lote 2!</p>
      <p className="text-sm text-muted-foreground mt-1">(atualizado em {yesterday})</p>
    </div>
  );
}
