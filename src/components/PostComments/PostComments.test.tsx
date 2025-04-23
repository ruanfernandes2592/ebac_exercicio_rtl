import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar dois comentários", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("textarea-comentario"), {
      target: {
        value: "Teste comentário adicionado",
      },
    });

    fireEvent.click(screen.getByTestId("btn-comentario"));

    fireEvent.change(screen.getByTestId("textarea-comentario"), {
      target: {
        value: "Segundo teste comentário adicionado",
      },
    });

    fireEvent.click(screen.getByTestId("btn-comentario"));

    expect(screen.getAllByTestId("elemento-comentario")).toHaveLength(2);
  });
});
