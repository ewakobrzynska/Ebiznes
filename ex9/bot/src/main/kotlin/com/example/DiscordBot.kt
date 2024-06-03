import net.dv8tion.jda.api.JDABuilder
import net.dv8tion.jda.api.entities.Activity
import net.dv8tion.jda.api.entities.channel.middleman.MessageChannel
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter
import javax.security.auth.login.LoginException

class DiscordBot : ListenerAdapter() {
    init {
        val token = System.getenv("discord_token") ?: throw IllegalStateException("Missing DISCORD_TOKEN environment variable")
        try {
            val jda = JDABuilder.createDefault(token)
                .setActivity(Activity.playing("Ktor Bot"))
                .addEventListeners(this)
                .build()
            jda.awaitReady()
        } catch (e: LoginException) {
            e.printStackTrace()
        } catch (e: InterruptedException) {
            e.printStackTrace()
        }
    }

    override fun onMessageReceived(event: MessageReceivedEvent) {
        super.onMessageReceived(event)
        if (event.author.isBot) return

        val message = event.message.contentRaw
        val channel = event.channel

        // Otwarcia rozmowy
        when {
            message.contains("hello", ignoreCase = true) -> sendOpeningMessage(channel,"hello")
            message.contains("how are you", ignoreCase = true) -> sendOpeningMessage(channel, "I'm fine, thank you!")
            message.contains("hi", ignoreCase = true) -> sendOpeningMessage(channel, "Hi there!")
            message.contains("good morning", ignoreCase = true) -> sendOpeningMessage(channel, "Good morning!")
            message.contains("what's up", ignoreCase = true) -> sendOpeningMessage(channel, "Not much, just chilling.")
        }

        // Zamknięcia rozmowy
        when {
            message.contains("bye", ignoreCase = true) -> sendClosingMessage(channel, "Goodbye!")
            message.contains("see you", ignoreCase = true) -> sendClosingMessage(channel, "See you later!")
            message.contains("take care", ignoreCase = true) -> sendClosingMessage(channel, "You too, take care!")
            message.contains("have a good day", ignoreCase = true) -> sendClosingMessage(channel, "Have a good day!")
            message.contains("good night", ignoreCase = true) -> sendClosingMessage(channel, "Good night!")
        }
    }

    private fun sendOpeningMessage(channel: MessageChannel, message: String) {
        channel.sendMessage(message).queue()
    }

    private fun sendClosingMessage(channel: MessageChannel, message: String) {
        channel.sendMessage(message).queue()
    }
}
