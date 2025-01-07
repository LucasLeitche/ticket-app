// App.js
import { useState } from "react";
import TicketTable from "./components/TicketTable";
import TicketDetails from "./components/TicketDetails";
import { Comment } from "./components/TicketDetails";

export interface Ticket {
  id: number;
  title: string;
  status: string;
  lastUpdated: string;
  description: string;
  createdAt: Date | string;
  comments: Comment[];
  creator: string;
}

export function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      title: "John Doe",
      status: "Aberto",
      lastUpdated: "2025-01-05",
      description: "User cannot log in.",
      creator: "John",
      createdAt: "2025-01-01",
      comments: [],
    },
    {
      id: 2,
      title: "Jack Doe",
      status: "Em Progresso",
      lastUpdated: "2025-01-04",
      description: "Homepage crashes on load.",
      creator: "Jack",
      createdAt: "2025-01-02",
      comments: [],
    },
    {
      id: 3,
      title: "Bob Doe",
      status: "Concluído",
      lastUpdated: "2025-01-03",
      description: "Add dark mode feature.",
      creator: "Bob",
      createdAt: "2025-01-03",
      comments: [],
    },
    {
      id: 4,
      title: "Marry Doe",
      status: "Concluído",
      lastUpdated: "2025-01-03",
      description: "Add dark mode feature.",
      creator: "Bob",
      createdAt: "2025-01-03",
      comments: [],
    },
    {
      id: 5,
      title: "Bob Doe",
      status: "Concluído",
      lastUpdated: "2025-01-03",
      description: "Add dark mode feature.",
      creator: "Bob",
      createdAt: "2025-01-03",
      comments: [],
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const updateTicketStatus = (id: number, newStatus: string) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: newStatus,
              lastUpdated: new Date().toISOString().split("T")[0],
            }
          : ticket
      )
    );
  };

  const addCommentToTicket = (id: number, comment: Comment) => {
    console.log(id, comment);
    setTickets((prevTickets: Ticket[]) =>
      prevTickets.map((ticket: Ticket) =>
        ticket.id === id
          ? { ...ticket, comments: [...ticket.comments, comment] }
          : ticket
      )
    );

    setSelectedTicket((prevTicket: Ticket | null) =>
      prevTicket
        ? { ...prevTicket, comments: [...prevTicket.comments, comment] }
        : null
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 lg:p-6">
      <TicketTable
        tickets={tickets}
        onStatusChange={updateTicketStatus}
        onTicketClick={(ticket: any) => setSelectedTicket(ticket)}
      />
      {selectedTicket && (
        <TicketDetails
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onAddComment={addCommentToTicket}
        />
      )}
    </div>
  );
}
