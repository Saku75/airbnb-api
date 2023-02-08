// Request: GET /api

import type { NextApiRequest, NextApiResponse } from "next";
import type ApiResponse from "lib/types/ApiResponse";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	// Return the response
	res.status(200).json({
		status: 200,
		message: "This is the AirBnB replica API",
		timestamp: new Date().toISOString(),
	});
}
