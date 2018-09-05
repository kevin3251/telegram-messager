const option = require('./lib/option')
const fileOption = require('./lib/fileOpiton')
const request = require('request-promise-native')

class TelegramMessager {
    constructor({ botToken } = {}) {
        this.botToken = botToken

        //general option
        this.getMe = () => {
            return request(option.getMe(this.botToken))
        }

        this.sendMessage = (reqData) => {
            let opt = option.sendMessage(this.botToken, reqData)
            return request(opt)
        }

        this.forwardMessage = (reqData) => {
            let opt = option.forwardMessage(this.botToken, reqData)
            return request(opt)
        }

        this.sendMediaGroup = (media, reqData) => {
            let opt = fileOption.sendMediaGroup(this.botToken, media, reqData)
            return request(opt)
        }

        this.sendLocation = (reqData) => {
            let opt = option.sendLocation(this.botToken, reqData)
            return request(opt)
        }

        this.editMessageLiveLocation = (reqData) => {
            let opt = option.editMessageLiveLocation(this.botToken, reqData)
            return request(opt)
        }

        this.stopMessageLiveLocation = (reqData) => {
            let opt = option.stopMessageLiveLocation(this.botToken, reqData)
            return request(opt)
        }

        this.sendVenue = (reqData) => {
            let opt = option.sendVenue(this.botToken, reqData)
            return request(opt)
        }

        this.sendContact = (reqData) => {
            let opt = option.sendContact(this.botToken, reqData)
            return request(opt)
        }

        this.sendChatAction = (reqData) => {
            let opt = option.sendChatAction(this.botToken, reqData)
            return request(opt)
        }

        this.getUserProfilePhotos = (reqData) => {
            let opt = option.getUserProfilePhotos(this.botToken, reqData)
            return request(opt)
        }

        this.getFile = (fileId) => {
            let opt = option.getFile(this.botToken, fileId)
            return request(opt)
        }

        this.kickChatMember = (reqData) => {
            let opt = option.kickChatMember(this.botToken, reqData)
            return request(opt)
        }

        this.unbanChatMember = (reqData) => {
            let opt = option.unbanChatMember(this.botToken, reqData)
            return request(opt)
        }

        this.restrictChatMember = (reqData) => {
            let opt = option.restrictChatMember(this.botToken, reqData)
            return request(opt)
        }

        this.promoteChatMember = (reqData) => {
            let opt = option.promoteChatMember(this.botToken, reqData)
            return request(opt)
        }

        this.exportChatInviteLink = (chatId) => {
            let opt = option.exportChatInviteLink(this.botToken, chatId)
            return request(opt)
        }

        this.deleteChatPhoto = (chatId) => {
            let opt = option.deleteChatPhoto(this.botToken, chatId)
            return request(opt)
        }

        this.setChatTitle = (reqData) => {
            let opt = option.setChatTitle(this.botToken, reqData)
            return request(opt)
        }

        this.setChatDescription = (reqData) => {
            let opt = option.setChatDescription(this.botToken, reqData)
            return request(opt)
        }

        this.pinChatMessage = (reqData) => {
            let opt = option.pinChatMessage(this.botToken, reqData)
            return request(opt)
        }

        this.unpinChatMessage = (chatId) => {
            let opt = option.unpinChatMessage(this.botToken, chatId)
            return request(opt)
        }

        this.leaveChat = (chatId) => {
            let opt = option.leaveChat(this.botToken, chatId)
            return request(opt)
        }

        this.getChat = (chatId) => {
            let opt = option.getChat(this.botToken, chatId)
            return request(opt)
        }

        this.getChatAdministrators = (chatId) => {
            let opt = option.getChatAdministrators(this.botToken, chatId)
            return request(opt)
        }

        this.getChatMembersCount = (chatId) => {
            let opt = option.getChatMembersCount(this.botToken, chatId)
            return request(opt)
        }

        this.getChatMember = (reqData) => {
            let opt = option.getChatMember(this.botToken, reqData)
            return request(opt)
        }

        this.setChatStickerSet = (reqData) => {
            let opt = option.setChatStickerSet(this.botToken, reqData)
            return request(opt)
        }

        this.deleteChatStickerSet = (chatId) => {
            let opt = option.deleteChatStickerSet(this.botToken, chatId)
            return request(opt)
        }

        this.answerCallbackQuery = (reqData) => {
            let opt = option.answerCallbackQuery(this.botToken, reqData)
            return request(opt)
        }

        this.editMessageText = (reqData) => {
            let opt = option.editMessageText(this.botToken, reqData)
            return request(opt)
        }

        this.editMessageMedia = (reqData) => {
            let opt = option.editMessageMedia(this.botToken, reqData)
            return request(opt)
        }

        this.editMessageReplyMarkup = (reqData) => {
            let opt = option.editMessageReplyMarkup(this.botToken, reqData)
            return request(opt)
        }

        this.deleteMessage = (reqData) => {
            let opt = option.deleteMessage(this.botToken, reqData)
            return request(opt)
        }

        this.getStickerSet = (name) => {
            let opt = option.getStickerSet(this.botToken, name)
            return request(opt)
        }

        this.setStickerPositionInSet = (reqData) => {
            let opt = option.setStickerPositionInSet(this.botToken, reqData)
            return request(opt)
        }

        this.deleteStickerFromSet = (sticker) => {
            let opt = option.deleteStickerFromSet(this.botToken, sticker)
            return request(opt)
        }

        this.answerInlineQuery = (reqData) => {
            let opt = option.answerInlineQuery(this.botToken, reqData)
            return request(opt)
        }

        this.sendInvoice = (reqData) => {
            let opt = option.sendInvoice(this.botToken, reqData)
            return request(opt)
        }

        this.answerShippingQuery = (reqData) => {
            let opt = option.answerShippingQuery(this.botToken, reqData)
            return request(opt)
        }

        this.answerPreCheckoutQuery = (reqData) => {
            let opt = option.answerPreCheckoutQuery(this.botToken, reqData)
            return request(opt)
        }

        this.setPassportDataErrors = (reqData) => {
            let opt = option.setPassportDataErrors(this.botToken, reqData)
            return request(opt)
        }

        this.sendGame = (reqData) => {
            let opt = option.sendGame(this.botToken, reqData)
            return request(opt)
        }

        this.setGameScore = (reqData) => {
            let opt = option.setGameScore(this.botToken, reqData)
            return request(opt)
        }

        this.getGameHighScores = (reqData) => {
            let opt = option.getGameHighScores(this.botToken, reqData)
            return request(opt)
        }

        // file options 

        this.sendPhoto = (photo, reqData) => {
            let opt = fileOption.sendPhoto(this.botToken, photo, reqData)
            return request(opt)
        }

        this.sendAudio = (audio, reqData) => {
            let opt = fileOption.sendAudio(this.botToken, audio, reqData)
            return request(opt)
        }

        this.sendDocument = (document, reqData) => {
            let opt = fileOption.sendDocument(this.botToken, document, reqData)
            return request(opt)
        }

        this.sendVideo = (video, reqData) => {
            let opt = fileOption.sendVideo(this.botToken, video, reqData)
            return request(opt)
        }

        this.sendAnimation = (animation, reqData) => {
            let opt = fileOption.sendAnimation(this.botToken, animation, reqData)
            return request(opt)
        }

        this.sendVoice = (voice, reqData) => {
            let opt = fileOption.sendVoice(this.botToken, voice, reqData)
            return request(opt)
        }

        this.sendVideoNote = (videoNote, reqData) => {
            let opt = fileOption.sendVideoNote(this.botToken, videoNote, reqData)
            return request(opt)
        }

        this.setChatPhoto = (photo, chatId) => {
            let opt = fileOption.setChatPhoto(this.botToken, photo, chatId)
            return request(opt)
        }

        this.sendSticker = (sticker, reqData) => {
            let opt = fileOption.sendSticker(this.botToken, sticker, reqData)
            return request(opt)
        }

        this.uploadStickerFile = (pngSticker, userId) => {
            let opt = fileOption.uploadStickerFile(this.botToken, pngSticker, userId)
            return request(opt)
        }

        this.createNewStickerSet = (pngSticker, reqData) => {
            let opt = fileOption.createNewStickerSet(this.botToken, pngSticker, reqData)
            return request(opt)
        }

        this.addStickerToSet = (pngSticker, reqData) => {
            let opt = fileOption.addStickerToSet(this.botToken, pngSticker, reqData)
            return request(opt)
        }
    }
}

const builder = ({ botToken } = {}) => {
    if (typeof botToken !== 'string') {
        throw new TypeError(`botToken should be typeof string. Type: ${botToken}`)
    }

    return new TelegramMessager({ botToken })
}

module.exports = builder