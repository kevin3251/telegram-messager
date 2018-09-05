const BASE_API = `https://api.telegram.org/bot`
const stream = require('stream')
const getOption = ({ methodName, botToken, formData = {}, headers = {
    'Content-Type': 'multipart/form-data'
} }) => ({
    uri: `${BASE_API}${botToken}/${methodName}`,
    headers,
    formData
})

const zipObj = (obj) => {
    let zip = {}
    for (let key in obj) {
        let item = obj[key]
        if (!item && item !== '') continue
        if (typeof item === 'function') continue

        zip[key] = item
    }
    return zip
}

const fileOptions = {
    sendPhoto(botToken, photo, opt = {}) {
        if (typeof photo !== 'string' && !(photo instanceof stream)) {
            throw new TypeError('photo should be string or stream.')
        }

        const {
            chat_id, caption, parse_mode,
            disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendPhoto', botToken,
            formData: zipObj({
                chat_id, photo,
                caption, parse_mode,
                disable_notification, reply_to_message_id,
                reply_markup
            })
        })
    },

    sendAudio(botToken, audio, opt = {}) {
        if (typeof audio !== 'string' && !(audio instanceof stream)) {
            throw new TypeError('audio should be string or stream.')
        }

        const {
            chat_id, caption, parse_mode,
            duration, performer, title, thumb,
            disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendAudio', botToken,
            formData: zipObj({
                chat_id, audio,
                caption, parse_mode,
                duration, performer, title, thumb,
                disable_notification, reply_to_message_id,
                reply_markup
            })
        })
    },

    sendDocument(botToken, document, opt = {}) {
        if (typeof document !== 'string' && !(document instanceof stream)) {
            throw new TypeError('document should be string or stream.')
        }

        const {
            chat_id, thumb, caption, parse_mode,
            disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendDocument', botToken,
            formData: zipObj({
                chat_id, document,
                thumb, caption, parse_mode,
                disable_notification, reply_to_message_id,
                reply_markup
            })
        })
    },

    sendVideo(botToken, video, opt = {}) {
        if (typeof video !== 'string' && !(video instanceof stream)) {
            throw new TypeError('video should be string or stream.')
        }

        const {
            chat_id, duration, width,
            height, thumb, caption, parse_mode,
            supports_streaming, disable_notification,
            reply_to_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'sendVideo', botToken,
            formData: zipObj({
                chat_id, video,
                duration, width,
                height, thumb, caption, parse_mode,
                supports_streaming, disable_notification,
                reply_to_message_id, reply_markup
            })
        })
    },

    sendAnimation(botToken, animation, opt = {}) {
        if (typeof animation !== 'string' && !(animation instanceof stream)) {
            throw new TypeError('animation should be string or stream.')
        }

        const {
            chat_id, duration, width,
            height, thumb, caption, parse_mode,
            disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendAnimation', botToken,
            formData: zipObj({
                chat_id, animation,
                duration, width,
                height, thumb, caption, parse_mode,
                disable_notification, reply_to_message_id,
                reply_markup
            })
        })
    },

    sendVoice(botToken, voice, opt = {}) {
        if (typeof voice !== 'string' && !(voice instanceof stream)) {
            throw new TypeError('voice should be string or stream.')
        }

        const {
            chat_id, caption, parse_mode,
            duration, disable_notification,
            reply_to_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'sendVoice', botToken,
            formData: zipObj({
                chat_id, voice,
                caption, parse_mode,
                duration, disable_notification,
                reply_to_message_id, reply_markup
            })
        })
    },

    sendVideoNote(botToken, video_note, opt = {}) {
        if (typeof video_note !== 'string' && !(video_note instanceof stream)) {
            throw new TypeError('video_note should be string or stream.')
        }

        const {
            chat_id, duration, length,
            thumb, disable_notification, reply_to_message_id,
            reply_markup
        } = opt

        return getOption({
            methodName: 'sendVideoNote', botToken,
            formData: zipObj({
                chat_id, video_note,
                duration, length,
                thumb, disable_notification, reply_to_message_id,
                reply_markup
            })
        })
    },

    setChatPhoto(botToken, photo, chat_id) {
        if (typeof photo !== 'string' && !(photo instanceof stream)) {
            throw new TypeError('photo should be string or stream.')
        }

        return getOption({
            methodName: 'setChatPhoto', botToken,
            formData: zipObj({ chat_id, photo })
        })
    },

    sendSticker(botToken, sticker, opt = {}) {
        if (typeof sticker !== 'string' && !(sticker instanceof stream)) {
            throw new TypeError('sticker should be string or stream.')
        }

        const {
            chat_id, disable_notification,
            reply_to_message_id, reply_markup
        } = opt

        return getOption({
            methodName: 'sendSticker', botToken,
            formData: zipObj({
                chat_id, sticker,
                disable_notification,
                reply_to_message_id, reply_markup
            })
        })
    },

    uploadStickerFile(botToken, png_sticker, user_id) {
        if (typeof png_sticker !== 'string' && !(png_sticker instanceof stream)) {
            throw new TypeError('png_sticker should be string or stream.')
        }

        return getOption({
            methodName: 'uploadStickerFile', botToken,
            formData: zipObj({ user_id, png_sticker })
        })
    },

    createNewStickerSet(botToken, png_sticker, opt = {}) {
        if (typeof png_sticker !== 'string' && !(png_sticker instanceof stream)) {
            throw new TypeError('png_sticker should be string or stream.')
        }

        const {
            user_id, name, title,
            emojis, contains_masks, mask_position
        } = opt

        return getOption({
            methodName: 'createNewStickerSet', botToken,
            formData: zipObj({
                user_id, name, title,
                png_sticker, emojis,
                contains_masks, mask_position
            })
        })
    },

    addStickerToSet(botToken, png_sticker, opt = {}) {
        if (typeof png_sticker !== 'string' && !(png_sticker instanceof stream)) {
            throw new TypeError('png_sticker should be string or stream.')
        }

        const {
            user_id, name, emojis, mask_position
        } = opt

        return getOption({
            methodName: 'addStickerToSet', botToken,
            formData: zipObj({
                user_id, name,
                png_sticker,
                emojis, mask_position
            })
        })
    }
}

module.exports = fileOptions