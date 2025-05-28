const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', ticketController.createTicket);
router.get('/', ticketController.getAllTicketsWithUsers);
router.put('/:id', ticketController.updateTicketStatus);

module.exports = router;