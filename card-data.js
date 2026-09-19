async function initializeCardData(cardId) {
    const { data: existingData, error: readError } =
        await supabaseClient
            .from("card_data")
            .select("id")
            .eq("card_id", cardId)
            .limit(1);

    if (readError) {
        throw readError;
    }

    // A newly created card starts with empty data.
    // We do not copy data from another card.
    if (existingData && existingData.length > 0) {
        return existingData[0];
    }

    const { data, error } =
        await supabaseClient
            .from("card_data")
            .insert({
                card_id: cardId,
                data: {}
            })
            .select()
            .single();

    if (error) {
        throw error;
    }

    return data;
}
