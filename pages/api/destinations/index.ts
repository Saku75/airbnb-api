// Request: GET /api/destinations
// Response: 200 OK (JSON)

import type { NextApiRequest, NextApiResponse } from "next";
import type ApiResponse from "lib/types/ApiResponse";
import type Destination from "lib/types/Destination";

import destinations from "lib/data/destinations.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	// Get the limit
	const limit = req.query.limit ? parseInt(req.query.limit as string) : 8;

	// Get the starting index
	const start = req.query.start ? parseInt(req.query.start as string) - 1 : 0;

	// Get the destinations to return
	const data: Destination[] = destinations
		.slice(start, start + limit)
		.map((destination) => {
			return {
				id: destination.id,
				image: destination.image,
				destination: destination.destination,
				title: destination.title,
			};
		});

	// Return the response
	res.status(200).json({
		status: 200,
		message: "OK",
		data: data,
		timestamp: new Date().toISOString(),
	});
}