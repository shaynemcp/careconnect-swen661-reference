import type {
  ScheduleItem,
  Medication,
  MemoryCard,
  Contact,
  CaregiverNote,
} from '../types';

const TODAY = new Date().toISOString().split('T')[0];

// ── Daily Schedule ─────────────────────────────────────────────────────────
// Persona: Jordan Rivera, 29, diagnosed ADHD (combined type). Works hybrid.
// Schedule reflects ADHD realities: time-blindness anchors, task initiation
// prompts, medication timing tied to appetite, and multi-step tasks split out.

export const scheduleItems: ScheduleItem[] = [
  { id: 's1', time: '07:30', label: 'Wake up', description: 'Phone is charging across the room on purpose', category: 'activity', done: true },
  { id: 's2', time: '08:00', label: 'Eat breakfast BEFORE meds', description: 'Medication reduces appetite — eating first is easier', category: 'meal', done: true },
  { id: 's3', time: '08:30', label: 'Morning medications', description: 'Vyvanse and sertraline, with water', category: 'medication', done: true },
  { id: 's4', time: '09:30', label: 'Start first work block', description: 'Step 1 of 3: open the document. That is the whole first step.', category: 'activity', done: false },
  { id: 's5', time: '12:30', label: 'Lunch — set a reminder', description: 'Easy to skip on medication. Eat something, even if small.', category: 'meal', done: false },
  { id: 's6', time: '14:00', label: 'Refill prescription', description: 'Step 1 of 3: call the pharmacy. Number is in Contacts.', category: 'activity', done: false },
  { id: 's7', time: '15:00', label: 'Therapy session with Dr. Alvarez', description: 'Video call — she sends the link 10 minutes before', category: 'appointment', done: false },
  { id: 's8', time: '17:00', label: 'Move your body', description: '15 minutes. Walk, stretch, anything.', category: 'activity', done: false },
  { id: 's9', time: '20:00', label: 'Evening medication', description: 'Guanfacine — helps with winding down', category: 'medication', done: false },
  { id: 's10', time: '22:30', label: 'Wind-down starts', description: 'Screens off. Tomorrow is already planned — nothing to hold in your head.', category: 'rest', done: false },
];

// ── Medications ────────────────────────────────────────────────────────────
// A realistic ADHD regimen: one stimulant, one non-stimulant adjunct,
// one SSRI for commonly co-occurring anxiety, plus a supplement.

export const medications: Medication[] = [
  {
    id: 'm1',
    name: 'Lisdexamfetamine (Vyvanse)',
    dosage: '40 mg — 1 capsule',
    times: ['08:30'],
    instructions: 'Take in the morning, after food. Taking it late can affect sleep.',
    colour: 'bg-calm-200',
    taken: { [TODAY]: true },
  },
  {
    id: 'm2',
    name: 'Guanfacine ER (Intuniv)',
    dosage: '2 mg — 1 tablet',
    times: ['20:00'],
    instructions: 'Take in the evening. May cause drowsiness — that is expected.',
    colour: 'bg-warm-200',
    taken: { [TODAY]: false },
  },
  {
    id: 'm3',
    name: 'Sertraline',
    dosage: '50 mg — 1 tablet',
    times: ['08:30'],
    instructions: 'Take with or without food, same time each day.',
    colour: 'bg-success-200',
    taken: { [TODAY]: true },
  },
  {
    id: 'm4',
    name: 'Vitamin D3',
    dosage: '1000 IU — 1 capsule',
    times: ['08:30'],
    instructions: 'Take with breakfast.',
    colour: 'bg-warning-200',
    taken: { [TODAY]: false },
  },
];

// ── Anchor Cards ───────────────────────────────────────────────────────────
// Reference cards for things working memory drops. Same shape as the original
// MemoryCard type; content re-aimed at ADHD external-memory support.

export const memoryCards: MemoryCard[] = [
  {
    id: 'mc1',
    title: 'Where your keys, wallet, and badge live',
    body: 'The bowl by the front door. If they are not there, check yesterday’s jacket pocket, then the kitchen counter. Put them back in the bowl the moment you walk in — before anything else.',
    category: 'place',
    pinned: true,
  },
  {
    id: 'mc2',
    title: 'How to refill a prescription (3 steps)',
    body: 'Step 1: Call Ridgeline Pharmacy at (202) 555-0148. Step 2: Give them your date of birth and the medication name. Step 3: Ask when it will be ready and add that time to CareConnect. Vyvanse is a controlled substance — it cannot be auto-refilled, so this has to be done every month.',
    category: 'event',
    pinned: true,
  },
  {
    id: 'mc3',
    title: 'When you feel overwhelmed',
    body: 'Stop. Pick one thing, not the list. Do the smallest possible version of it for two minutes. If that does not work, message Sam — asking for help is a strategy, not a failure.',
    category: 'hobby',
    pinned: true,
  },
  {
    id: 'mc4',
    title: 'Starting a task you have been avoiding',
    body: 'Avoidance usually means the first step is unclear, not that you are lazy. Write down what the very first physical action is — "open the laptop", "find the form". Do only that. Momentum comes after starting, not before.',
    category: 'hobby',
    pinned: false,
  },
  {
    id: 'mc5',
    title: 'Dr. Alvarez — appointment rules',
    body: 'Therapy is every Thursday at 3:00 pm. She sends the video link 10 minutes before. Cancellations need 24 hours’ notice or the session is charged. Her office number is (202) 555-0173.',
    category: 'event',
    pinned: false,
  },
  {
    id: 'mc6',
    title: 'Laundry, start to finish (4 steps)',
    body: 'Step 1: Load the washer and add detergent. Step 2: Set a CareConnect reminder for 45 minutes. Step 3: Move it to the dryer when the reminder goes off. Step 4: Set another reminder for 60 minutes, then fold. The reminders are the part that matters.',
    category: 'place',
    pinned: false,
  },
];

// ── Contacts ────────────────────────────────────────────────────────────────

export const contacts: Contact[] = [
  {
    id: 'c1',
    name: 'Sam Rivera',
    role: 'caregiver',
    phone: '(202) 555-0112',
    avatarInitials: 'SR',
    avatarColour: 'bg-success-600',
    notes: 'Your partner and care partner. Checks in most evenings.',
    isEmergency: true,
  },
  {
    id: 'c2',
    name: 'Maria Rivera',
    role: 'family',
    phone: '(202) 555-0123',
    avatarInitials: 'MR',
    avatarColour: 'bg-calm-500',
    notes: 'Your sister. Good person to call when Sam is unavailable.',
    isEmergency: true,
  },
  {
    id: 'c3',
    name: 'Dr. Priya Sharma',
    role: 'doctor',
    phone: '(202) 555-0190',
    avatarInitials: 'PS',
    avatarColour: 'bg-warm-600',
    notes: 'Prescribing psychiatrist. Handles medication changes and refills.',
    isEmergency: false,
  },
  {
    id: 'c4',
    name: 'Ridgeline Pharmacy',
    role: 'doctor',
    phone: '(202) 555-0148',
    avatarInitials: 'RP',
    avatarColour: 'bg-calm-700',
    notes: 'Call here for refills. Vyvanse needs a new prescription each month.',
    isEmergency: false,
  },
  {
    id: 'c5',
    name: 'Emergency Services',
    role: 'emergency',
    phone: '911',
    avatarInitials: '!',
    avatarColour: 'bg-alert-600',
    notes: 'Call 911 for police, fire, or medical emergencies.',
    isEmergency: true,
  },
];

// ── Care Partner Notes ──────────────────────────────────────────────────────

export const caregiverNotes: CaregiverNote[] = [
  {
    id: 'n1',
    date: TODAY,
    author: 'Sam Rivera',
    note: 'Morning meds taken on time and breakfast happened first, which is the pattern that works. No prompting needed today.',
    priority: 'low',
  },
  {
    id: 'n2',
    date: TODAY,
    author: 'Sam Rivera',
    note: 'Lunch got skipped again yesterday — third time this week. Appetite suppression from the Vyvanse is the likely cause. Worth raising with Dr. Sharma at the next medication review rather than nagging about it.',
    priority: 'medium',
  },
  {
    id: 'n3',
    date: '2026-08-21',
    author: 'Maria Rivera',
    note: 'Talked through the prescription refill on the phone. Splitting it into three steps in the app made the difference — it got done the same afternoon.',
    priority: 'low',
  },
  {
    id: 'n4',
    date: '2026-08-20',
    author: 'Sam Rivera',
    note: 'Evening guanfacine missed two nights running, and sleep was rough both nights. Moved the reminder from 10:00 pm to 8:00 pm so it lands before the wind-down window.',
    priority: 'medium',
  },
];
