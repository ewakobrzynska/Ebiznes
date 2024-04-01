import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class DiscordMessage(
    @SerialName("content")
    val content: String
)

suspend fun sendMessageToDiscord(message: String) {
    val discordWebhookUrl = "https://discord.com/api/webhooks/1223261514253729872/TVHlxq6w7LiI7-M0pn0PA8TdrhiCfEQ5WXRByVpgZDHaflCutA2P0SHVVsKQ4LTc0a4i"

    val client = HttpClient(CIO) {
        install(JsonFeature) {
            serializer = KotlinxSerializer(Json { ignoreUnknownKeys = true })
        }
    }

    val discordMessage = DiscordMessage(message)
    client.post<Unit>(discordWebhookUrl) {
        contentType(ContentType.Application.Json)
        body = discordMessage
    }

    client.close()
}

suspend fun main() {
    val messageToSend = "Hello, Discord!"
    sendMessageToDiscord(messageToSend)
    println("Message sent successfully!")
}
