const router = require('express').Router();

const {
  validateCreateCard, validateDeleteCardById, validateDeleteLikeCard, validatePutLikeCard,
} = require('../utils/regex');

const {
  getCards, createCard, deleteCardById, putLikeCard, deleteLikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', validateCreateCard, createCard);
router.delete('/:cardId', validateDeleteCardById, deleteCardById);
router.delete('/:cardId/likes', validateDeleteLikeCard, deleteLikeCard);
router.put('/:cardId/likes', validatePutLikeCard, putLikeCard);

module.exports = router;
