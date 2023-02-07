import type { NextApiRequest, NextApiResponse } from "next";
import type ApiResponse from "lib/types/ApiResponse";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse>
) {
	res.status(200).json({
		status: 200,
		message: "OK",
		data: null,
		timestamp: new Date().toISOString(),
	});
}
