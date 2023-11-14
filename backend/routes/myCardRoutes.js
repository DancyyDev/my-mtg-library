import express from "express";
import { Card } from "../model/cardModel.js";

const router = express.Router();

//Adding a card to the database
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.manaCost ||
      !request.body.oracleText ||
      !request.body.color ||
      !request.body.cardImg ||
      !request.body.cardQuantity
    ) {
      return response.status(400).send({
        message: "Send all required fields.",
      });
    }

  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });

  } finally {
    const newCard = {
      name: request.body.name,
      manaCost: request.body.manaCost,
      oracleText: request.body.oracleText,
      color: request.body.color,
      cardImg: request.body.cardImg,
      cardQuantity: request.body.cardQuantity,
    };

    const card = await Card.create(newCard);

    return response.status(201).send(card);
  }
});

//Finding all the cards in database
router.get("/getCards", async (request, response) => {
  try {
    const cards = await Card.find({});

    return response.status(200).json({
      count: cards.length,
      data: cards,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  } 
});

router.get("/searchCards/:oracleText", async (request, response) => {
  try {
    
    const cards = await Card.find({});
    
    return response.status(200).json({
      count: cards.length,
      data: cards,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  } 
});

// Finding a Single Card in database
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const card = await Card.findById(id);

    return response.status(200).json(card);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//Updating a Card
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.manaCost ||
      !request.body.oracleText
    ) {
      return response.status(400).send({
        message: "Send all required fields.",
      });
    }
    const { id } = request.params;

    const updateCard = await Card.findByIdAndUpdate(id, request.body);

    if (!updateCard) {
      return response.status(404).json({ message: "Card not Found" });
    }

    return response.status(200).send({ message: "Update Successful" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//Update card Quantity
router.put("/quantityUp/:id", async (request, response) => {
  console.log(request)
  try {
    
    if (
      !request.body.cardQuantity
    ) {
      return response.status(400).send({
        message: "Send all required fields.",
      });
    }
    const { id } = request.params;

    const updateCardQuantity = await Card.findByIdAndUpdate(id, request.body);

    if (!updateCardQuantity) {
      return response.status(404).json({ message: "Card not Found" });
    }
    
    console.log("update successful")
    return response.status(200).send({ message: "Update Successful" });

  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});
router.put("/quantityDown/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const updateCardQuantity = await Card.findByIdAndUpdate(id, request.body);

    if (!updateCardQuantity) {
      return response.status(404).json({ message: "Card not Found" });
    }

    return response.status(200).send({ message: "Update Successful" });

  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//Deleting a card from the database
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deletedCard = await Card.findByIdAndDelete(id);

    if (!deletedCard) {
      response.status(404).json({ message: "Card not in database." });
    }

    return response
      .status(200)
      .send({ message: "Card removed from database." });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

export default router;
