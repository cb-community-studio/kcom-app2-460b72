import React from "react";
import { render, screen } from "@testing-library/react";

import BorrowhistoryCreateDialogComponent from "../BorrowhistoryCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders borrowhistory create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BorrowhistoryCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("borrowhistory-create-dialog-component")).toBeInTheDocument();
});
