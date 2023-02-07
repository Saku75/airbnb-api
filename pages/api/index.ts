// Request: GET /api
// Response: 200 OK

import type { NextApiRequest, NextApiResponse } from "next";
import type ApiResponse from "lib/types/ApiResponse";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	// Return the response
	res.status(200).json({
		status: 200,
		message: "OK",
		data: null,
		timestamp: new Date().toISOString(),
	});
}
