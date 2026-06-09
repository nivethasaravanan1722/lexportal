const express = require('express');
const supabase = require('../supabaseClient');
const router = express.Router();

// GET ALL CASES
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = supabase.from('lex_cases').select('*');

    if (search) {
      query = query.or(`case_number.ilike.%${search}%,title.ilike.%${search}%,accused_name.ilike.%${search}%`);
    }

    const { data, error } = await query;
    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ADD NEW CASE
router.post('/', async (req, res) => {
  try {
    const { case_number, title, type, court, description, accused_name, next_hearing } = req.body;

    const { data, error } = await supabase
      .from('lex_cases')
      .insert([{ case_number, title, type, court, description, accused_name, next_hearing }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;