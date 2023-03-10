import React from "react";
import { render, screen } from "@testing-library/react";

import BorrowhistoryPage from "../BorrowhistoryPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders borrowhistory page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BorrowhistoryPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("borrowhistory-datatable")).toBeInTheDocument();
    expect(screen.getByRole("borrowhistory-add-button")).toBeInTheDocument();
});
