// Request: GET /api/destinations/count

import type { NextApiRequest, NextApiResponse } from "next";
import type ApiResponse from "lib/types/ApiResponse";

import destinations from "lib/data/destinations.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	// Get the number of destinations
	const data = destinations.length;

	// Return the response
	res.status(200).json({
		status: 200,
		message: "OK",
		data: data,
		timestamp: new Date().toISOString(),
	});
}
