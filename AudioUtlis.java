// Example Java utility for advanced audio processing (optional, not required in MVP)
import javax.sound.sampled.*;

public class AudioUtils {
    public static void amplify(String inputWav, String outputWav, float gain) throws Exception {
        AudioInputStream stream = AudioSystem.getAudioInputStream(new java.io.File(inputWav));
        AudioFormat format = stream.getFormat();
        byte[] audioBytes = stream.readAllBytes();
        for (int i = 0; i < audioBytes.length; i++) {
            audioBytes[i] = (byte)Math.min(127, Math.max(-128, audioBytes[i]*gain));
        }
        AudioInputStream outStream = new AudioInputStream(
            new java.io.ByteArrayInputStream(audioBytes),
            format,
            audioBytes.length / format.getFrameSize()
        );
        AudioSystem.write(outStream, AudioFileFormat.Type.WAVE, new java.io.File(outputWav));
    }
}
