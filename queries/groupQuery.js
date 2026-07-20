export const allGroups = "SELECT * FROM `groups`;";
export const singleGroup = "SELECT * FROM `groups` WHERE slug = ?;";
export const findGroupIds = "SELECT groups.id FROM `groups`;"
export const findGroupSlugs = "SELECT groups.slug FROM `groups`;"
export const createGroup = "INSERT INTO `groups` (`id`, `name`, `slug`, `created_at`, `owner_id`) VALUES (?, ?, ?, NOW(), ?);";
export const addingMembers = "INSERT INTO `user_group` (`user_id`, `group_id`) VALUES ";