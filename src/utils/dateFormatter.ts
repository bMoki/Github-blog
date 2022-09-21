import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

export function publishedDateRelativeToNow(date: string) {
    return formatDistanceToNowStrict(new Date(date), {
        locale: ptBR,
        addSuffix: true
    })
} 