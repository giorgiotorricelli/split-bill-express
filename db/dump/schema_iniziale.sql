CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) NOT NULL
);
CREATE TABLE `groups`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `slug` VARCHAR(50) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `owner_id` INT UNSIGNED NOT NULL
);
ALTER TABLE
    `groups` ADD UNIQUE `groups_name_unique`(`name`);
ALTER TABLE
    `groups` ADD UNIQUE `groups_slug_unique`(`slug`);
CREATE TABLE `user_group`(
    `user_id` INT UNSIGNED NOT NULL,
    `group_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`user_id`, `group_id`)
);
CREATE TABLE `expenses`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `description` VARCHAR(70) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `paid_by` INT UNSIGNED NOT NULL,
    `group_id` INT UNSIGNED NOT NULL,
    `created_at` DATETIME NOT NULL
);
CREATE TABLE `user_expense`(
    `expense_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`expense_id`, `user_id`)
);
ALTER TABLE
    `expenses` ADD CONSTRAINT `expenses_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `groups`(`id`);
ALTER TABLE
    `user_group` ADD CONSTRAINT `user_group_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `user_expense` ADD CONSTRAINT `user_expense_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `user_group` ADD CONSTRAINT `user_group_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `groups`(`id`);
ALTER TABLE
    `user_expense` ADD CONSTRAINT `user_expense_expense_id_foreign` FOREIGN KEY(`expense_id`) REFERENCES `expenses`(`id`);
ALTER TABLE
    `groups` ADD CONSTRAINT `groups_owner_id_foreign` FOREIGN KEY(`owner_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `expenses` ADD CONSTRAINT `expenses_paid_by_foreign` FOREIGN KEY(`paid_by`) REFERENCES `users`(`id`);