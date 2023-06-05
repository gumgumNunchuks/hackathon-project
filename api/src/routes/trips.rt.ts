import controllers from '../controllers';
import express from 'express';


const router = express.Router()

router.get("/get/:id",controllers.getAllTrips)

router.get("/get/:id/completed",controllers.completeTrip)

router.post("/createtrip",controllers.createTrip)

