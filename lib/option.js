const BASE_API = `https://api.telegram.org/bot`
const getOption = ({ methodName, botToken, body = {} }) => ({
    uri: `${BASE_API}${botToken}/${methodName}`,
    json: true,
    body
})

const options = {
    getMe(botToken) {
        return getOption({ methodName: 'getMe', botToken, formData: null })
    },

    sendMessage(botToken, opt = {}) {
        const {
            chat_id, text, parse_mode, disable_web_page_preview,
            disable_notification, reply_to_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'sendMessage', botToken,
            body: {
                chat_id, text, parse_mode, disable_web_page_preview,
                disable_notification, reply_to_message_id, reply_markup
            }
        })
    },

    forwardMessage(botToken, opt = {}) {
        const {
            chat_id, from_chat_id, disable_notification, message_id
        } = opt

        return getOption({
            methodName: 'forwardMessage', botToken,
            body: {
                chat_id, from_chat_id, disable_notification, message_id
            }
        })
    },

    sendMediaGroup(botToken, media, opt = {}) {
        const {
            chat_id, disable_notification, reply_to_message_id
        } = opt

        return getOption({
            methodName: 'sendMediaGroup', botToken,
            body: {
                chat_id, media,
                disable_notification, reply_to_message_id
            }
        })
    },

    sendLocation(botToken, opt = {}) {
        const {
            chat_id, latitude, longitude, live_period,
            disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendLocation', botToken,
            body: {
                chat_id, latitude, longitude, live_period,
                disable_notification, reply_to_message_id,
                reply_markup
            }
        })
    },

    editMessageLiveLocation(botToken, opt = {}) {
        const {
            chat_id, message_id, inline_message_id,
            latitude, longitude, reply_markup
        } = opt

        return getOption({
            methodName: 'editMessageLiveLocation', botToken,
            body: {
                chat_id, message_id, inline_message_id,
                latitude, longitude, reply_markup
            }
        })
    },

    stopMessageLiveLocation(botToken, opt = {}) {
        const {
            chat_id, message_id, inline_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'stopMessageLiveLocation', botToken,
            body: {
                chat_id, message_id, inline_message_id, reply_markup
            }
        })
    },

    sendVenue(botToken, opt = {}) {
        const {
            chat_id, latitude, longitude, title, address,
            foursquare_id, foursquare_type, disable_notification,
            reply_to_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'sendVenue', botToken,
            body: {
                chat_id, latitude, longitude, title, address,
                foursquare_id, foursquare_type, disable_notification,
                reply_to_message_id, reply_markup
            }
        })
    },

    sendContact(botToken, opt = {}) {
        const {
            chat_id, phone_number, first_name, last_name,
            vcard, disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendContact', botToken,
            body: {
                chat_id, phone_number, first_name, last_name,
                vcard, disable_notification, reply_to_message_id,
                reply_markup
            }
        })
    },

    sendChatAction(botToken, opt = {}) {
        const { chat_id, action } = opt

        return getOption({
            methodName: 'sendChatAction', botToken,
            body: { chat_id, action }
        })
    },

    getUserProfilePhotos(botToken, opt = {}) {
        const { user_id, offset, limit } = opt
        return getOption({
            methodName: 'getUserProfilePhotos', botToken,
            body: { user_id, offset, limit }
        })
    },

    getFile(botToken, file_id) {
        return getOption({
            methodName: 'getFile', botToken,
            body: { file_id }
        })
    },

    kickChatMember(botToken, opt = {}) {
        const { chat_id, user_id, until_date } = opt
        return getOption({
            methodName: 'kickChatMember', botToken,
            body: { chat_id, user_id, until_date }
        })
    },

    unbanChatMember(botToken, opt = {}) {
        const { chat_id, user_id } = opt
        return getOption({
            methodName: 'kickChatMember', botToken,
            body: { chat_id, user_id }
        })
    },

    restrictChatMember(botToken, opt = {}) {
        const {
            chat_id, user_id, until_date, can_send_messages,
            can_send_media_messages, can_send_other_messages,
            can_add_web_page_previews
        } = opt

        return getOption({
            methodName: 'restrictChatMember', botToken,
            body: {
                chat_id, user_id, until_date, can_send_messages,
                can_send_media_messages, can_send_other_messages,
                can_add_web_page_previews
            }
        })
    },

    promoteChatMember(botToken, opt = {}) {
        const {
            chat_id, user_id, can_change_info, can_post_messages,
            can_edit_messages, can_delete_messages, can_invite_users,
            can_restrict_members, can_pin_messages, can_promote_members
        } = opt

        return getOption({
            methodName: 'promoteChatMember', botToken,
            body: {
                chat_id, user_id, can_change_info, can_post_messages,
                can_edit_messages, can_delete_messages, can_invite_users,
                can_restrict_members, can_pin_messages, can_promote_members
            }
        })
    },

    exportChatInviteLink(botToken, chat_id) {
        return getOption({
            methodName: 'exportChatInviteLink', botToken,
            body: { chat_id }
        })
    },

    deleteChatPhoto(botToken, chat_id) {
        return getOption({
            methodName: 'deleteChatPhoto', botToken,
            body: { chat_id }
        })
    },

    setChatTitle(botToken, opt = {}) {
        const { chat_id, title } = opt
        return getOption({
            methodName: 'setChatTitle', botToken,
            body: { chat_id, title }
        })
    },

    setChatDescription(botToken, opt = {}) {
        const { chat_id, description } = opt
        return getOption({
            methodName: 'setChatDescription', botToken,
            body: { chat_id, description }
        })
    },

    pinChatMessage(botToken, opt = {}) {
        const { chat_id, message_id, disable_notification } = opt
        return getOption({
            methodName: 'pinChatMessage', botToken,
            body: {
                chat_id, message_id, disable_notification
            }
        })
    },

    unpinChatMessage(botToken, chat_id) {
        return getOption({
            methodName: 'unpinChatMessage', botToken,
            body: { chat_id }
        })
    },

    leaveChat(botToken, chat_id) {
        return getOption({
            methodName: 'leaveChat', botToken,
            body: { chat_id }
        })
    },

    getChat(botToken, chat_id) {
        return getOption({
            methodName: 'getChat', botToken,
            body: { chat_id }
        })
    },

    getChatAdministrators(botToken, chat_id) {
        return getOption({
            methodName: 'getChatAdministrators', botToken,
            body: { chat_id }
        })
    },

    getChatMembersCount(botToken, chat_id) {
        return getOption({
            methodName: 'getChatMembersCount', botToken,
            body: { chat_id }
        })
    },

    getChatMember(botToken, opt = {}) {
        const { chat_id, user_id } = opt
        return getOption({
            methodName: 'getChatMember', botToken,
            body: { chat_id, user_id }
        })
    },

    setChatStickerSet(botToken, opt = {}) {
        const { chat_id, sticker_set_name } = opt
        return getOption({
            methodName: 'setChatStickerSet', botToken,
            body: { chat_id, sticker_set_name }
        })
    },

    deleteChatStickerSet(botToken, chat_id) {
        return getOption({
            methodName: 'deleteChatStickerSet', botToken,
            body: { chat_id }
        })
    },

    answerCallbackQuery(botToken, opt = {}) {
        const {
            callback_query_id, text, show_alert, url, cache_time
        } = opt

        return getOption({
            methodName: 'answerCallbackQuery', botToken,
            body: {
                callback_query_id, text, show_alert, url, cache_time
            }
        })
    },

    editMessageText(botToken, opt = {}) {
        const {
            chat_id, message_id, inline_message_id,
            text, parse_mode, disable_web_page_preview,
            reply_markup
        } = opt

        return getOption({
            methodName: 'editMessageText', botToken,
            body: {
                chat_id, message_id, inline_message_id,
                text, parse_mode, disable_web_page_preview,
                reply_markup
            }
        })
    },

    editMessageCaption(botToken, opt = {}) {
        const {
            chat_id, message_id, inline_message_id,
            caption, parse_mode, reply_markup
        } = opt

        return getOption({
            methodName: 'editMessageCaption', botToken,
            body: {
                chat_id, message_id, inline_message_id,
                caption, parse_mode, reply_markup
            }
        })
    },

    editMessageMedia(botToken, opt = {}) {
        const {
            chat_id, message_id, inline_message_id,
            media, reply_markup
        } = opt

        return getOption({
            methodName: 'editMessageMedia', botToken,
            body: {
                chat_id, message_id, inline_message_id,
                media, reply_markup
            }
        })
    },

    editMessageReplyMarkup(botToken, opt = {}) {
        const {
            chat_id, message_id, inline_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'editMessageReplyMarkup', botToken,
            body: {
                chat_id, message_id, inline_message_id, reply_markup
            }
        })
    },

    deleteMessage(botToken, opt = {}) {
        const { chat_id, message_id } = opt
        return getOption({
            methodName: 'deleteMessage', botToken,
            body: { chat_id, message_id }
        })
    },

    getStickerSet(botToken, name) {
        return getOption({
            methodName: 'getStickerSet', botToken,
            body: { name }
        })
    },

    setStickerPositionInSet(botToken, opt = {}) {
        const { sticker, position } = opt
        return getOption({
            methodName: 'setStickerPositionInSet', botToken,
            body: { sticker, position }
        })
    },

    deleteStickerFromSet(botToken, sticker) {
        return getOption({
            methodName: 'deleteStickerFromSet', botToken,
            body: { sticker }
        })
    },

    answerInlineQuery(botToken, opt = {}) {
        const {
            inline_query_id, results, cache_time, is_personal,
            next_offset, switch_pm_text, switch_pm_parameter
        } = opt

        return getOption({
            methodName: 'answerInlineQuery', botToken,
            body: {
                inline_query_id, results, cache_time, is_personal,
                next_offset, switch_pm_text, switch_pm_parameter
            }
        })
    },

    sendInvoice(botToken, opt = {}) {
        const {
            chat_id, title, description, payload, provider_token,
            start_parameter, currency, prices, provider_data,
            photo_url, photo_size, photo_width, photo_height,
            need_name, need_phone_number, need_email, need_shipping_address,
            send_phone_number_to_provider, send_email_to_provider,
            is_flexible, disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendInvoice', botToken,
            body: {
                chat_id, title, description, payload, provider_token,
                start_parameter, currency, prices, provider_data,
                photo_url, photo_size, photo_width, photo_height,
                need_name, need_phone_number, need_email, need_shipping_address,
                send_phone_number_to_provider, send_email_to_provider,
                is_flexible, disable_notification, reply_to_message_id,
                reply_markup
            }
        })
    },

    answerShippingQuery(botToken, opt = {}) {
        const {
            shipping_query_id, ok, shipping_options, error_message
        } = opt

        return getOption({
            methodName: 'answerShippingQuery', botToken,
            body: {
                shipping_query_id, ok, shipping_options, error_message
            }
        })
    },

    answerPreCheckoutQuery(botToken, opt = {}) {
        const {
            pre_checkout_query_id, ok, error_message
        } = opt

        return getOption({
            methodName: 'answerPreCheckoutQuery', botToken,
            body: {
                pre_checkout_query_id, ok, error_message
            }
        })
    },

    setPassportDataErrors(botToken, opt = {}) {
        const { user_id, errors } = opt
        return getOption({
            methodName: 'setPassportDataErrors', botToken,
            formData: { user_id, errors }
        })
    },

    sendGame(botToken, opt = {}) {
        const {
            chat_id, game_short_name, disable_notification,
            reply_to_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'sendGame', botToken,
            body: {
                chat_id, game_short_name, disable_notification,
                reply_to_message_id, reply_markup
            }
        })
    },

    setGameScore(botToken, opt = {}) {
        const {
            user_id, score, force, disable_edit_message,
            chat_id, message_id, inline_message_id
        } = opt

        return getOption({
            methodName: 'setGameScore', botToken,
            body: {
                user_id, score, force, disable_edit_message,
                chat_id, message_id, inline_message_id
            }
        })
    },

    getGameHighScores(botToken, opt = {}) {
        const {
            user_id, chat_id, message_id, inline_message_id
        } = opt

        return getOption({
            methodName: 'getGameHighScores', botToken,
            body: {
                user_id, chat_id, message_id, inline_message_id
            }
        })
    }
}

module.exports = options