import Trip from "../models/trip.model";
import status from 'http-status';


/**
 * creating a new trip
 **/
export async function createTrip(req:any,res:any) {
    const name=req.params.name
    const startDate=req.params.startDate
    const endDate=req.params.endDate
    const places=req.params.places
    const trip= await Trip.create(
        {
            name:name,
            startDate:startDate,
            endDate:endDate,
            places:places,
        }
    )
    const id= trip.getDataValue('id')
    return res
        .status(status.CREATED)
        .json({ id: id})
}

export async function completeTrip(req:any,res:any) {
    const id=req.params.id
    const trips = await Trip.findAll({
        where:{
            id:id,
            status:'completed'
        }
    });

}

/**
 *find all the trip of perticular user
 **/
export async function getAllTrips(req:any,res:any) {
    try {
        const id= req.params.id
        // Fetch all trips from the database
        const trips = await Trip.findAll({
            where:{
                id:id
            }
        });
    
        // Send the trips as a response
        return res.json(trips);
      } catch (error) {
        // error
        return res.status(status.INTERNAL_SERVER_ERROR)
      }
}
