// Request: GET /api/destinations

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

	// Get the offset
	const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;

	// Get the destinations to return
	const data: Destination[] = destinations
		.slice(offset, offset + limit)
		.map((destination) => {
			return {
				id: destination.id,
				image: destination.image,
				destination: destination.destination,
				title: destination.title,
			};
		});

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
			message: "Destinations not found",
			timestamp: new Date().toISOString(),
		});
	}
}
