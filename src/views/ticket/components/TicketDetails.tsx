import { useEffect, useState } from "react";
import { Ticket } from "../tickets";

interface Props {
  ticket: Ticket;
  onClose: () => void;
  onAddComment: (id: number, comment: Comment) => void;
}

export interface Comment {
  text: string;
  date: Date | string;
}

const TicketDetails = ({ ticket, onClose, onAddComment }: Props) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    console.log(newComment)
    if (newComment.trim()) {
      onAddComment(ticket.id, {
        text: newComment,
        date: new Date().toISOString(),
      });
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 lg:p-8 ">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold text-primary">Detalhes do Ticket</h2>
          <button
            className="text-red-500 font-semibold hover:text-red-700"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
        <div className="mb-4">
          <p><strong>ID:</strong> {ticket.id}</p>
          <p><strong>Título:</strong> {ticket.title}</p>
          <p><strong>Descrição:</strong> {ticket.description}</p>
          <p><strong>Criador:</strong> {ticket.creator}</p>
          <p><strong>Data de Criação:</strong> {ticket.createdAt}</p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Comentários</h3>
          <ul className="mb-4 space-y-2 max-h-[100px] lg:max-h-[200px] overflow-auto">
            {ticket.comments.map((comment: Comment, index: number) => (
              <li key={index} className="p-2 bg-gray-100 rounded-md">
                {comment.text} <em className="text-sm  text-gray-500 text-[.6rem] block text-right">({comment.date})</em>
              </li>
            ))}
          </ul>
          <div className="flex w-full items-center space-x-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.currentTarget.value)}
              placeholder="Adicionar um Comentário"
              className="border rounded-md p-2 text-gray-700 w-full focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
            <button
              onClick={handleAddComment}
              className="bg-primary text-white w-10 h-10 rounded-md hover:bg-primary/80"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;