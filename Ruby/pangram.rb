# frozen_string_literal: true

def pangram?(string)
  ('a'..'z').all? { |letter| string.downcase.include?(letter) }
end
