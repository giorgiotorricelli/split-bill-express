export const allGroups = "SELECT * FROM `groups`;";
export const singleGroup = "SELECT * FROM `groups` WHERE slug = ?;";
export const findGroupIds = "SELECT groups.id FROM `groups`;"
export const findGroupSlugs = "SELECT groups.slug FROM `groups`;"
export const createGroup = "INSERT INTO `groups` (`id`, `name`, `slug`, `created_at`, `owner_id`) VALUES (?, ?, ?, NOW(), ?);";
export const addingMembers = "INSERT INTO `user_group` (`user_id`, `group_id`) VALUES ";
export const selectUserGroup = "SELECT groups.id, user_group.user_id FROM `groups` JOIN user_group ON groups.id = user_group.group_id WHERE groups.id = 1 GROUP BY groups.id, user_group.user_id;";
export const idFromSlug = "SELECT groups.id FROM `groups` WHERE groups.slug = ?;"
export const deleteUserGroup = "DELETE FROM `user_group` WHERE group_id = ?;";
export const deleteGroup = "DELETE FROM `groups` WHERE groups.id = ?;";