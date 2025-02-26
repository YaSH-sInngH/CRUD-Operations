import express from 'express'
import {addUser, getUser, loadUser, editUser, deleteUser} from '../controller/user-controller.js'

const router = express.Router();

router.post('/add', addUser);
router.get('/list', getUser);
router.get('/:userId', loadUser);
router.put('/:userId', editUser);
router.delete('/:userId', deleteUser);

export default router;