import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import UserProvider from "@/providers/UserProvider";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SharedPage from "@/pages/SharedPage";
import FolderPage from "@/pages/FolderPage";
import { getSampleFolder } from "@/apis/sample-api";
import { ErrorBoundary } from "@/pages/error/ErrorBoundary";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/shared",
		loader: () => {
			return defer({ folder: getSampleFolder() });
		},
		element: <SharedPage />,
		ErrorBoundary: ErrorBoundary,
	},
	{
		path: "/folder",
		element: <FolderPage />,
		ErrorBoundary: ErrorBoundary,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<AuthProvider>
				<UserProvider>
					<RouterProvider router={router} />
				</UserProvider>
			</AuthProvider>
		</ErrorBoundary>
	</React.StrictMode>,
);
