import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is EvalBotX?",
    answer:
      "EvalBotX is a smart, web-based exam generator that helps instructors create CLO/PLO-aligned assessments with bilingual (English/Urdu) support.",
  },
  {
    id: 2,
    question: "Can I generate exams automatically?",
    answer:
      "Yes. EvalBotX allows you to select CLOs, filter relevant questions, and automatically generate well-structured exam papers.",
  },
  {
    id: 3,
    question: "Does EvalBotX support bilingual exams?",
    answer:
      "Absolutely. The platform integrates with a translation API to convert exams into Urdu while maintaining formatting.",
  },
  {
    id: 4,
    question: "Is there a reporting feature?",
    answer:
      "Yes. EvalBotX generates CLO/PLO performance reports so QA officers can monitor compliance and coverage.",
  },
  {
    id: 5,
    question: "How secure is my data?",
    answer:
      "Your data is stored securely with role-based access control, encryption, and best industry security practices.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container id="faq" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={4}>
        Frequently Asked Questions
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded[faq.id] || false}
            onChange={() => toggleExpand(faq.id)}
            sx={{ mb: 2, borderRadius: 2, boxShadow: 1 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </motion.div>
    </Container>
  );
};

export default FAQ;
