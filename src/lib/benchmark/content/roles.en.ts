/* Role pills per track — Le Benchmark des Makers. English.

   TRANSLATED FROM `roles.ts`, NOT REVIEWED YET.

   Eight roles per track, 32 in all, in the same order as the French file: the
   pills are laid out in that order on step 05, and the French page has been
   reviewed in it. Captured for segmentation only, this does not affect question
   selection in v1.

   Job titles that are already English in the French list are left exactly as
   they are: `Revenue Operations`, `Forward Deployed Engineer`, `Growth
   engineering`, `DevOps / SRE`, `Data & ML`, `Business & Revenue Ops`. They are
   what these roles are called in both languages, and translating them would
   invent a title nobody uses. */

export const ROLES = {
  growth: ["Organic growth & SEO", "Paid acquisition", "Social & community", "Content & brand", "CRM & lifecycle", "Product marketing", "Growth engineering", "Marketing leadership"],
  eng: ["Backend / platform", "Frontend / product", "Data & ML", "DevOps / SRE", "Agent engineering", "Security", "Forward Deployed Engineer", "Engineering leadership"],
  ops: ["Business & Revenue Ops", "Automation engineering", "Customer support ops", "Supply chain & logistics", "IT & internal systems", "Project management", "Quality & compliance", "Operations leadership"],
  fin: ["Financial planning & analysis", "Accounting & reporting", "Revenue Operations", "Billing & collections", "Treasury & risk", "Procurement", "Audit & compliance", "Finance leadership"]
};
