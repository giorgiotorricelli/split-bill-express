-- 1. Creazione della tabella (se non esiste già)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- 2. Inserimento di dati fittizi (Seed)
INSERT INTO users (name) VALUES
('Alessandro Rossi'),
('Sofia Bianchi'),
('Lorenzo Ferrari'),
('Giulia Russo'),
('Andrea Marino'),
('Francesca Colombo'),
('Mattia Bruno'),
('Elisa Ricci'),
('Gabriele Gallo'),
('Giorgia Greco'),
('Davide Barbieri'),
('Chiara Fontana'),
('Riccardo Santoro'),
('Beatrice Mariani'),
('Tommaso Moretti'),
('Sara Pellegrini'),
('Federico Carbone'),
('Alice Mazza'),
('Leonardo Rizzo'),
('Emma Leone');

SELECT *
FROM users;

INSERT INTO `groups` (`id`, `name`, `slug`, `created_at`, `owner_id`) VALUES
(1, 'Coinquilini Casa', 'coinquilini-casa', NOW(), 1), -- Creato da Alice
(2, 'Viaggio Barcellona', 'viaggio-barcellona', NOW(), 2), -- Creato da Bob
(3, 'Regalo Compleanno Marco', 'regalo-compleanno-marco', NOW(), 4); -- Creato da Diana

-- 3. ASSOCIAZIONE UTENTI AI GRUPPI (user_group)
-- Definiamo chi fa parte di quale gruppo
INSERT INTO `user_group` (`user_id`, `group_id`) VALUES
-- Membri del Gruppo 1 (Coinquilini: Alice, Bob, Charlie)
(1, 1),
(7, 1),
(11, 1),
-- Membri del Gruppo 2 (Viaggio Barcellona: Bob, Charlie, Diana, Ethan)
(2, 2),
(3, 2),
(14, 2),
(17, 2),
-- Membri del Gruppo 3 (Regalo: Alice, Diana, Ethan)
(2, 3),
(4, 3),
(19, 3),
(20,3);

INSERT INTO `user_group` (`user_id`, `group_id`) VALUES
(14, 1)


-- 4. POPOLAMENTO SPESE (expenses)
-- Creiamo alcune spese inserite nei vari gruppi e pagate da diversi utenti
INSERT INTO `expenses` (`id`, `description`, `amount`, `paid_by`, `group_id`, `created_at`) VALUES
-- Spese nel Gruppo 1 (Coinquilini)
(1, 'Spesa Esselunga', 120.50, 1, 1, NOW()),
(2, 'Bolletta Luce', 85.00, 14, 1, NOW()),
-- Spesa nel Gruppo 2 (Viaggio Barcellona)
(3, 'Prenotazione Hotel', 450.00, 17, 2, NOW()),
-- Spesa nel Gruppo 3 (Regalo)
(4, 'Acquisto Regalo (Smartwatch)', 150.00, 20, 3, NOW());

-- 5. ASSOCIAZIONE UTENTI ALLE SPESE (user_expense)
-- Qui indichiamo tra quali utenti viene divisa ciascuna spesa
INSERT INTO `user_expense` (`expense_id`, `user_id`) VALUES
(1, 1),
(1, 7),
(1, 11),
(2, 14),
(2, 7),
(3, 17),
(3, 2),
(3, 14),
(3, 3),
(4, 20),
(4, 4),
(4, 2);