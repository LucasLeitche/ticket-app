import { useState } from "react";
import { Ticket } from "../tickets";

interface Props {
  tickets: Ticket[];
  onStatusChange: (ticket_id: number, value: string) => void;
  onTicketClick: (ticket: Ticket) => void;
}

const TicketTable = ({ tickets, onStatusChange, onTicketClick }: Props) => {
  const [filter, setFilter] = useState("Todos");

  const filteredTickets =
    filter === "Todos"
      ? tickets
      : tickets.filter((ticket) => ticket.status === filter);

  return (
    <div className="w-full max-w-[1250px] mx-auto md:p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-primary font-bold text-xl md:text-3xl">Tickets</h1>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
          className="border rounded-md p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="Todos">Todos</option>
          <option value="Aberto">Aberto</option>
          <option value="Em Progresso">Em Progresso</option>
          <option value="Concluído">Concluído</option>
        </select>
      </div>
      <div className="w-full mt-10 overflow-auto">
        <div className="w-full flex">
          <div className="w-[20%]">
            <span className="text-[grey] text-[.8rem] md:text-[1rem]">ID</span>
          </div>
          <div className="w-[40%]">
            <span className="text-[grey] text-[.8rem] md:text-[1rem]">
              TÍTULO
            </span>
          </div>
          <div className="w-[30%]">
            <span className="text-[grey] text-[.8rem] md:text-[1rem]">
              STATUS
            </span>
          </div>
          <div className="w-[20%] flex">
            <span className="text-[grey] text-[.8rem] md:text-[1rem]">
              ÚLTIMA ATUALIZAÇÃO
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-5">
          {filteredTickets.map((ticket: Ticket) => (
            <div className="w-full flex bg-white p-2 md:p-4 rounded-md hover:bg-primary/80 text-[grey] hover:text-white">
              <div className="w-[10%] md:w-[20%] flex items-center">
                <span>{ticket.id}</span>
              </div>
              <div
                className="w-[40%] cursor-pointer"
                onClick={() => onTicketClick(ticket)}
              >
                <span className=" text-[.8rem] md:text-[1rem]">
                  {ticket.title}
                </span>
                <small className="text-[grey] text-[.5rem] md:text-[.8rem] block ">
                  Clique para editar
                </small>
              </div>
              <div className="w-[30%]">
                <select
                  value={ticket.status}
                  onChange={(e) =>
                    onStatusChange(ticket.id, e.currentTarget.value)
                  }
                  className="border bg-gray-100 text-[.6rem] md:text-[.8rem] rounded-md p-2 max-w-[80px] md:max-w-max text-ellipsis overflow-hidden text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="Aberto">Aberto</option>
                  <option value="Em Progresso">Em Progresso</option>
                  <option value="Concluído">Concluído</option>
                </select>
              </div>
              <div className="w-[20%] flex">
                <span className="text-[.8rem] md:text-[1rem]">
                  {ticket.lastUpdated}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
