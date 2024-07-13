import connectDB from "@/config/database"

export const GET = async (request) => {
    try {
        // connect to DB
        await connectDB()
        return new Response(JSON.stringify({
            message: 'Properties fetched successfully',
        }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(error.message, { status: 500 })
    }
}
