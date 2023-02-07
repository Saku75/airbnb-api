// Request: GET /api/destinations/[destinationId]
// Response: 200 OK (JSON)

import type { NextApiRequest, NextApiResponse } from "next";
import type ApiResponse from "lib/types/ApiResponse";
import type Destination from "lib/types/Destination";

import destinations from "lib/data/destinations.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	// Get the destination ID
	const destinationId = parseInt(req.query.destinationId as string);

	// Get the destination
	const data: Destination | undefined = destinations.find(
		(destination) => destination.id === destinationId
	);

	// Return the response
	if (data) {
		res.status(200).json({
			status: 200,
			message: "OK",
			data: data,
			timestamp: new Date().toISOString(),
		});
	} else {
		res.status(404).json({
			status: 404,
			message: "Not Found",
			data: null,
			timestamp: new Date().toISOString(),
		});
	}
}
