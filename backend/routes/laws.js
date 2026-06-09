const express = require('express');
const supabase = require('../supabaseClient');
const router = express.Router();

// GET ALL LAWS
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = supabase.from('lex_laws').select('*');

    if (search) {
      query = query.or(`section.ilike.%${search}%,title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data, error } = await query;
    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;