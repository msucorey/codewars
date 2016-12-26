=begin
You'll get an entered term (lowercase string) and an array of known words
(also lowercase strings). Your task is to find out, which word from the
dictionary is most similar to the entered one. The similarity is described by
the minimum number of letters you have to add, remove or replace in order to
get from the entered word to one of the dictionary. The lower the number of
required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter
to be changed is more similar to another word that needs 2 (or more) letters
to be changed. E.g. the mistyped term berr is more similar to beer (1 letter
to be replaced) than to barrel (3 letters to be changed in total).
=end

class Dictionary
  def initialize(words)
    @words=words
  end

  def find_most_similar(term)
      term_count = Hash.new(0)
      term.chars.each do |char|
        term_count[char] += 1
      end
      min_word = "debug!"
      min_changes = 100
      @words.each do |word|
        word_count = Hash.new(0)
        word.chars.each do |char|
          word_count[char] += 1
        end
        letters = (term_count.keys + word_count.keys).uniq
        matched_letters = 0
        letters.each do |letter|
          matched_letters += [term_count[letter], word_count[letter]].min
        end
        changes = [term.length, word.length].max - matched_letters
        if changes < min_changes
          min_word = word
          min_changes = changes
        end
      end
      min_word
  end
end

words=['cherry', 'peach', 'pineapple', 'melon', 'strawberry', 'raspberry', 'apple', 'coconut', 'banana']
test_dict=Dictionary.new(words)
puts test_dict.find_most_similar('strawbery')#,'strawberry')
puts test_dict.find_most_similar('berry')#,'cherry')
puts test_dict.find_most_similar('aple')#,'apple')
