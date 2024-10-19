import { useState } from "react";
const faqs = [
    {
        question: "Q1. Can I use this software for monthly preparation of financial statements?",
        answer: "A1. Yes, this software can be used to prepare monthly financial statements.",
    },
    {
        question: "Q2. Do I need to upload notes to accounts information in the software or can I fill the information directly?",
        answer: "A2. In the software, both options are available: you can directly fill in the notes-related information, or you can upload the information through an Excel file template.",
    },
    {
        question: "Q3. How can manual entries be posted in the software during financial statement preparation?",
        answer: "A3. The software allows posting of manual entries, even if there is no GL code in the trial balance. For example, reclassifying capital creditors from trade payables to non-current items.",
    },
    {
        question: "Q4. Can the software generate both Ind AS and IGAAP financial statements?",
        answer: "A4. Yes, it can generate both Ind AS and IGAAP financial statements, depending on the mapping of GL codes during initial implementation.",
    },
    {
        question: "Q5. Can we preserve the final version of financial statements signed by auditors and management?",
        answer: "A5. Yes, the software allows locking the final version of financial statements, which can then be retrieved anytime from the report section.",
    },
    {
        question: "Q6. How can we ensure that previous year/period information is not altered?",
        answer: "A6. The admin can lock the period, preventing any edits to the previous year/period data while allowing report generation.",
    },
    {
        question: "Q7. How can GL code reclassifications in subsequent periods be handled without changing the signed financial statements?",
        answer: "A7. The software allows generating financial statements at both the 'User' and 'Admin' levels. This way, changes in live data can be reflected without altering the final signed version.",
    },
    {
        question: "Q8. Can we retrieve previous versions of financial statements?",
        answer: "A8. Yes, the last 5 versions of financial statements are available in the report section.",
    },
    {
        question: "Q9. Can corporate identify changes made at the unit level after accounts finalization?",
        answer: "A9. Yes, changes made at the unit level can be identified if data is synced after finalization.",
    },
    {
        question: "Q10. Can unit-wise financial statements be generated in a columnar format?",
        answer: "A10. Yes, this is possible by designing the financial statements template during initial implementation or later.",
    },
];

const FaqFinSoEasy = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="accordion-flush" className="m-5">
            <div className="text-[#2323CE] text-[30px] font-bold mb-2">
                Frequently Asked Questions
            </div>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <h2>
                        <button
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200"
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-flush-body-${index}`}
                        >
                            <span className="text-[#2323CE] text-start">{faq.question}</span>
                            <div>
                                <svg
                                    className={`w-3 h-3 mx-2 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </div>
                        </button>
                    </h2>
                    {openIndex === index && (
                        <div id={`accordion-flush-body-${index}`} className="py-5 border-b border-gray-200">
                            <p className="text-gray-500">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FaqFinSoEasy